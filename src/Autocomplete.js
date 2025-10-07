import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

// ✅ define movie list directly here
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  { label: 'Fight Club', year: 1999 },
  { label: 'The Matrix', year: 1999 }
];

export default function ComboBox() {
  return (
    <div style={{ margin: '40px', textAlign: 'center' }}>
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300, margin: 'auto' }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
}
