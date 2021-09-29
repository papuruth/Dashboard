import React from 'react';
import Button from '@/utils/generalComponents/Button/index';
import DefaultLayout from '@/utils/generalComponents/DefaultLayout/index';

export default function Dashboard() {
  return (
    <DefaultLayout>
      <h1>Dashboard component!</h1>
      <Button title="Test Button" onClick={() => {}} />
    </DefaultLayout>
  );
}
