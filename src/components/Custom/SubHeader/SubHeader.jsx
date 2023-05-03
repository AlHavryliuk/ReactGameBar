import Navigation from "components/Header/Navigation/Navigation"
import { CustomSubHeader, CustomSubWrapper, MobileAuth } from "./SubHeader.styles"
import React from 'react'
import Authorization from "components/Authorization/Authorization"


const SubHeader = () => {



    return (
        <CustomSubWrapper>
            <CustomSubHeader>
                <MobileAuth >
                    <Authorization />
                </MobileAuth>
                <Navigation />
            </CustomSubHeader>
        </CustomSubWrapper>
    )
}

export default SubHeader