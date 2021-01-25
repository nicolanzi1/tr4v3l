import React from 'react'
import { StatsData } from '../../data/StatsData'

import { Description, Heading, Icon, StatsBox, StatsContainer, Title, Wrapper } from './StatsElements'

const Stats = () => {
    return (
        <StatsContainer>
            <Heading>Why Choose Us?</Heading>
            <Wrapper>
                {StatsData.map((item, index) => {
                    return (
                        <StatsBox key={index}>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                        </StatsBox>
                    )
                })}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats
