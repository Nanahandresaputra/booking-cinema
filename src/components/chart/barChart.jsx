// import { allSeat } from "../../data-dummy/seat";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartData = ({ title, dailyData, dataKey, title2, title3 }) => {
  return (
    <ResponsiveContainer width={1200} height={600}>
      <BarChart
        width={500}
        height={300}
        data={dailyData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={title} fill="#8884d8" />
        {/* {title2 ? <Bar dataKey={title2} fill="#8774d5" /> : null}
        {title3 ? <Bar dataKey={title3} fill="#8334d4" /> : null} */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartData;
