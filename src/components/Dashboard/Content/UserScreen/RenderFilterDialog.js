import React from 'react';
import PropTypes from 'prop-types';
import Button from '@/utils/generalComponents/Button';
import Checkbox from '@/utils/generalComponents/CheckBox';

export default function RenderFilterDialog({ handleSelectedFilter, selectedFilter, handleFilterReset, filterMachine }) {
  const filterOptions = [
    {
      id: 'gender',
      title: 'Gender',
      options: [
        {
          id: 'male',
          title: 'Male',
        },
        {
          id: 'female',
          title: 'Female',
        },
      ],
    },
    {
      id: 'userType',
      title: 'User Type',
      options: [
        {
          id: 'admin',
          title: 'Admin',
        },
        {
          id: 'user',
          title: 'User',
        },
      ],
    },
  ];

  return (
    <div className="filter__wrapper">
      <div id="accordion">
        {filterOptions.map((ele) => (
          <div key={ele.id}>
            <div className="filter__item">
              <h5>
                <Button
                  className="filter__item__btn__icon"
                  data-toggle="collapse"
                  data-target={`#${ele.id}`}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  title={ele.title}
                />
              </h5>
            </div>
            <div id={ele.id} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              {ele.options.map((item) => (
                <div className="card-body" key={item.id}>
                  <Checkbox
                    name={item.id}
                    checked={selectedFilter.get(item.id) ?? false}
                    onChange={handleSelectedFilter}
                    className="filter__checkbox"
                  />
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="filter__dialog__actions">
        <Button title="Reset Filter" onClick={handleFilterReset} />
        <Button title="Filter" onClick={filterMachine} />
      </div>
    </div>
  );
}

RenderFilterDialog.propTypes = {
  handleSelectedFilter: PropTypes.func.isRequired,
  selectedFilter: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleFilterReset: PropTypes.func.isRequired,
  filterMachine: PropTypes.func.isRequired,
};
