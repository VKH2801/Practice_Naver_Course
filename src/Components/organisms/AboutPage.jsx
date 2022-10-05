import React from 'react';
import Feature from '../molecules/Feature/Feature';
import Footer from '../molecules/Footer/Footer';
import AssignFooter from '../molecules/AssignFooter/AssignFooter';
import MoreInfo from '../molecules/MoreInfo/MoreInfo';
import PageHeader from '../molecules/PageHeader/PageHeader';

const AboutPage = () => {
    return (
        <div>
            <PageHeader></PageHeader>
            <Feature></Feature>
            <MoreInfo></MoreInfo>
            <AssignFooter></AssignFooter>
            <Footer></Footer>
        </div>

    );
}

export default AboutPage;