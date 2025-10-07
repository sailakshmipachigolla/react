
import Button from '@mui/material/Button';

function Buttons() {
  return (
    <div style={{ marginTop: '20px' }}>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
    </div>
  );
}

export default Buttons;
