import './styles.scss';

const CELL_HEIGHT = 72;
const ODD_CELL_COLOR = '#ffffff'
const EVEN_CELL_COLOR = '#000000'

const cell = () => {
  const arr = [];
  let top = 0;
  let left = 0;
  for (let i = 0; i < 64; i++) {
    const colorOdd =  i % 2 ? EVEN_CELL_COLOR :  ODD_CELL_COLOR
    const colorEven =  i % 2 ? ODD_CELL_COLOR : EVEN_CELL_COLOR
    arr.push({
      id: i, 
      top: top * CELL_HEIGHT, 
      left:  left * CELL_HEIGHT,
      color: top % 2 ? colorOdd : colorEven
    });
    if (left === 7) {
      top++;
      left = 0;
    } else left++
  }
  return arr;
} 

function Field() {
  console.log(cell())
  return (
    <div className="chess">
      <div className="chess__field">{cell().map(i => {
        return (
          <div 
            className='chess__cell' 
            key={i.id} 
            style={{
              backgroundColor: i.color, 
              height: CELL_HEIGHT, 
              width: CELL_HEIGHT,
              left: i.left,
              top: i.top
            }}
          />
        )
      })}</div>
    </div>
  );
};

export default Field;
