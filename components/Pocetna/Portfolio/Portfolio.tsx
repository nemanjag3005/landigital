import React from 'react'
import { PortfolioWrapper,
         PortfolioHeading,
         PortfolioInfo,
         RadoviContainer,
         Rad,
         RadIme,
         RadImg
         
} from './PortfolioStyles'


const Portfolio = () => {
    return (
        <PortfolioWrapper>
           <PortfolioHeading>
               Portfolio
               </PortfolioHeading> 
               <PortfolioInfo>
               Neki od naših prethodnih radova.
               </PortfolioInfo>
               <RadoviContainer>
                   <Rad>

                      <RadImg src={'/flex.jpeg'}>

                      </RadImg>
                      <RadIme>
                          Flex Team
                      </RadIme>
                   </Rad>
                   <Rad>
                       <a target='_blank' href='http://cms.porsche-clubs.com/PorscheClubs/pc_serbia/pc_main.nsf/web/C12581100034FAE3C1257EFA003F7CC4'>
                   <RadImg src={'/porsche.jpeg'}>

                 </RadImg>
                 </a>
                    <RadIme>
                       Porsche Club Serbia
                     </RadIme>   
                   </Rad>
                   <Rad>
                       <a target='_blank' href='https://janovic-camping.com'>
                   <RadImg src={'/janovic.jpeg'}>

                    </RadImg>
                    </a>
                     <RadIme>
                         Janovic Camping
                          </RadIme>
                   </Rad>
               </RadoviContainer>
        </PortfolioWrapper>
    )
}

export default Portfolio
