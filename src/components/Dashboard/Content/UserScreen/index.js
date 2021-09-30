import React, { useEffect, useState } from 'react';
import { AddIcon, FilterIcon, SearchIcon } from '@/assets';
import { useStateValue } from '@/utils/appState/StateProvider';
import Button from '@/utils/generalComponents/Button';
import RenderModal from '@/utils/generalComponents/Modal';
import RenderUserImageIcon from '@/utils/generalComponents/RenderUserImageIcon/RenderUserImageIcon';
import TextField from '@/utils/generalComponents/TextField';
import { GLOBAL_CONSTANTS } from '@/utils/globalConstants';
import localization from '@/utils/localization';
import { getUsersService } from '@/utils/service/userService';
import RenderFilterDialog from './RenderFilterDialog';

export default function UsersScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState(new Map());
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [{ userList }, dispatch] = useStateValue();
  const {
    dashboard: {
      users: { filter, add, search, searchNotFound, userListEmpty, modalTitle },
    },
  } = localization;
  const { paginationData } = GLOBAL_CONSTANTS;

  useEffect(() => {
    (async () => {
      dispatch({
        type: 'TOGGLE_LOADER',
        payload: true,
      });
      const { response } = await getUsersService();
      if (response?.length) {
        response.sort((a, b) => a.userType - b.userType);
        dispatch({
          type: 'SET_USER_LIST',
          payload: response,
        });
        setFilteredData(response);
      } else {
        dispatch({
          type: 'SET_USER_LIST',
          payload: [],
        });
      }
      dispatch({
        type: 'TOGGLE_LOADER',
        payload: false,
      });
    })();
  }, [dispatch]);

  const { userType, genderType } = GLOBAL_CONSTANTS;
  const getGender = ({ gender }) => {
    return genderType[gender];
  };

  const getUserType = ({ userType: type }) => {
    return userType[type];
  };

  const handleSearch = ({ target: { value } }) => {
    setSearchQuery(value);
    if (value && value?.length > 2) {
      if (filteredData.length) {
        const searchUserList = filteredData.filter((item) => {
          if (item.name.toLowerCase().includes(value.toLowerCase()) || item.email.toLowerCase().includes(value.toLowerCase())) {
            return item;
          }
          return false;
        });
        setFilteredData(searchUserList);
        setIsSearching(true);
      }
    } else if (!value) {
      setFilteredData(userList);
      setIsSearching(false);
    }
  };

  const handleSelectedFilter = ({ target: { name, checked } }) => {
    setFilters((prevState) => {
      prevState.set(name, checked);
      return new Map(prevState);
    });
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleFilterReset = () => {
    setFilters(new Map());
    setFilteredData(userList);
  };

  const filterMachine = () => {
    const selectedFilters = Array.from(new Map(Array.from(filters).filter((item) => item[1])).keys());
    if (selectedFilters.length && userList.length) {
      const filteredUserList = userList.filter((item) =>
        selectedFilters.some((ele) => genderType[item.gender].toLowerCase() === ele || userType[item.userType].toLowerCase() === ele),
      );
      setFilteredData(filteredUserList);
    }
    handleModal();
  };

  const renderNoDataFound = () => {
    return (
      <div className="no__data__found">
        <h1>{isSearching ? searchNotFound : userListEmpty}</h1>
      </div>
    );
  };

  return (
    <div className="user__list__wrapper">
      <div className="user__list__header">
        <div className="header__heading">
          <h1>Users Records</h1>
        </div>
        <div className="header__actions">
          <div>
            <div className="header__search">
              <TextField className="user__list__search" endIcon={<SearchIcon />} value={searchQuery} onChange={handleSearch} placeholder={search} />
            </div>
            <div className="user__list__filter dropdown">
              <Button startIcon={<FilterIcon />} title={filter} className="user__filter__button dropdown-toggle" onClick={handleModal} />
              <RenderModal open={openModal} onClose={handleModal} title={modalTitle}>
                <RenderFilterDialog
                  handleSelectedFilter={handleSelectedFilter}
                  selectedFilter={filters}
                  handleFilterReset={handleFilterReset}
                  filterMachine={filterMachine}
                />
              </RenderModal>
            </div>
            <div className="user__list__add">
              <Button startIcon={<AddIcon />} title={add} className="user__add__button" />
            </div>
          </div>
        </div>
      </div>
      <div className="user__list__table">
        <table>
          <tbody>
            {filteredData.length > 0
              ? filteredData.map((item) => (
                <tr className="user__list__item" key={item.id}>
                  <td className="user__list__image">
                    <RenderUserImageIcon src={item.image} alt={item.name} />
                  </td>
                  <td className="list__item__name">{item.name}</td>
                  <td className="list__item__email">{item.email}</td>
                  <td className="list__item__gender">{getGender(item)}</td>
                  <td className="list__item__usertype">{getUserType(item)}</td>
                </tr>
                ))
              : renderNoDataFound()}
          </tbody>
        </table>
        <div className="user__list__table__pagination">
          {paginationData.map((item) => (
            <Button startIcon={item.icon} title={item.title} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
