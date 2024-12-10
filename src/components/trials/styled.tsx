import { Badge, Card } from 'react-bootstrap';
import { styled } from 'styled-components';

export const StyledBadge = styled(Badge)`
    width: 160px;
    background: green !important;
    position: absolute;
    top: -10px;
    z-index: 10;
`

export const StyledCard =  styled(Card) `
    position: relative
`