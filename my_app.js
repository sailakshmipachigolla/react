// Inputs
import ComboBox from './Autocomplete';
import BasicSelect from './BasicSelect';
import BasicSwitches from './BasicSwitches';
import BasicTextFields from './BasicTextFields';
import BasicButtonGroup from './ButtonGroup';
import Buttons from './Buttons';
import Checkboxes from './Checkboxes';
import ContinuousSlider from './ContinuousSlider';
import FloatingActionButtons from './FloatingActionButtons';
import HalfRating from './HalfRating';
import RadioButtonsGroup from './RadioButtonsGroup';
import ToggleButtons from './ToggleButtons';
import TransferList from './TransferList';

import BasicChips from './BasicChips';
import BasicList from './BasicList';
import BasicTooltip from './BasicTooltip';
import DataTable from './DataTable';
import IconsComp from './IconsComp';
import ImageAvatars from './ImageAvatars';
import IntroDivider from './IntroDivider';
import SimpleBadge from './SimpleBadge';
import Types from './Types';

import AlertComp from './AlertComp';
import BackdropComp from './BackdropComp';
import ProgressComp from './ProgressComp';

import AccordionUsage from './AccordionUsage';
import AppBarComp from './AppBarComp';
import PaperComp from './PaperComp';
import RecipeReviewCard from './RecipeReviewCard';

import LinkComp from './LinkComp';
import TabsComp from './TabsComp';

import BasicRangeShortcuts from './BasicRangeShortcuts';
import CustomOpeningIcon from './CustomOpeningIcon';
import LocalizationDayjs from './LocalizationDayjs';

import BasicGrid from './BasicGrid';
import BoxBasic from './BoxBasic';

function Main() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      
      <h2>Inputs</h2>
      <ComboBox />
      <Buttons />
      <BasicButtonGroup />
      <Checkboxes />
      <FloatingActionButtons />
      <RadioButtonsGroup />
      <HalfRating />
      <BasicSelect />
      <ContinuousSlider />
      <BasicSwitches />
      <BasicTextFields />
      <TransferList />
      <ToggleButtons />

      <h2 style={{ marginTop: '50px' }}>Data Display</h2>
      <ImageAvatars />
      <SimpleBadge />
      <BasicChips />
      <IntroDivider />
      <IconsComp />
      <BasicList />
      <DataTable />
      <BasicTooltip />
      <Types />

      <h2 style={{ marginTop: '50px' }}>Feedback</h2>
      <AlertComp />
      <BackdropComp />
      <ProgressComp />

      <h2 style={{ marginTop: '50px' }}>Surfaces</h2>
      <AppBarComp />
      <PaperComp />
      <RecipeReviewCard />
      <AccordionUsage />

      <h2 style={{ marginTop: '50px' }}>Navigation</h2>
      <LinkComp />
      <TabsComp />
      

      <h2 style={{ marginTop: '50px' }}>Muix data grid</h2>
      <LocalizationDayjs />
      <CustomOpeningIcon />
      <BasicRangeShortcuts />

      <BasicGrid />
      <BoxBasic />

    
    </div>
  );
}

export default Main;
