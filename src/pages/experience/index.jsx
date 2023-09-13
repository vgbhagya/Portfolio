import React from "react";
import { FaBlackTie } from "react-icons/fa"; 
import PageHeaderContent from "../../components/pageHeaderContent";
import './style.scss';

import CardList from "./CardList";
const Experience = () => {
    return(
        <section id="experience" className="experience">
            <PageHeaderContent
              headerText= " My Experience "
              icon={ <FaBlackTie size={40} />}
            />
      
        <CardList />
        </section>
    );
};
export default Experience;