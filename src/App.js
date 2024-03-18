import './App.css';
import BaseComponent from './components/BaseComponent';

function App() {
  return (
    <div className='component-wrap'>
      <BaseComponent
        title="Sub-Category"
        description="The assets are distributed between equity and cash & equivalents."
        type="pieChart"
      />
      <BaseComponent
        title="Fund Distribution"
        description="A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund."
        type="barChart"
      />
      <BaseComponent
        title="Top Sectors"
        description="The assets are distributed between equity and cash & equivalents."
        type="stackedBarChart"
      />
    </div>
  );
}

export default App;
