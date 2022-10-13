import React from 'react';
import ManageOrderHeader from '../../Components/molecules/ManageOrderHeader/ManageOrderHeader';
import TabManagerOrder from '../../Components/molecules/TabManagerOrder/TabManagerOrder';
const ManageOrder = () => {
    return (
        <div className='manageOrder'>
            <ManageOrderHeader></ManageOrderHeader>
            <TabManagerOrder></TabManagerOrder>
        </div>
    );
}