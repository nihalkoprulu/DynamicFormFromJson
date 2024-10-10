import styled from 'styled-components';
import { device, themeColors } from 'assets/theme/style';

export const DynamicFormViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 80vw;
  max-width: 1600px;

  @media ${device.desktopS} {
    width:calc(100% - 32px);
    padding: 0 32px 64px 32px;
    gap: 16px;
  } 
`;

export const DynamicFormViewContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin-bottom: 16px;

  @media ${device.desktopS} {
    grid-template-columns: 1fr;
  } 
`;

export const DynamicFormViewTitle = styled.p`
  font-size: 24px;
  text-align: center;
  color: ${themeColors.primary};
  font-weight: 600;
  padding: 0 0 20px 0;
`;

export const DynamicFormButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const DynamicFormOutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${themeColors.primary};
`;

export const DynamicFormOutputTitle = styled.p`
  font-size: 24px;
  color: #000;
  font-weight: 600;
  padding: 0 0 40px 0;
`;

export const DynamicFormOutput = styled.div`
  display: flex;
  padding: 20px;
`;

export const DynamicFormViewTabsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const FieldContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: flex-end;
`;

