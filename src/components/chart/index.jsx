import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const options = {
  responsive: true,
  tooltips: {
    enabled: false,
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: 'end',
      align: 'top',
      offset: 10,
      color: 'black',
      font: {
        size: 10,
        weight: 'medium',
        family: 'Montserrat',
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        color: 'white',
        padding: 0,
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);

          return {
            weight: 'bold',
            family: 'Montserrat',
            size: size > 16 ? 16 : size,
          };
        },
      },
    },
    y: {
      display: false,
    },
  },
};

const Chart = ({ data, className }) => {
  return (
    <Bar
      plugins={[ChartDataLabels]}
      className={className}
      data={data}
      options={options}
    />
  );
};

Chart.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Chart;
