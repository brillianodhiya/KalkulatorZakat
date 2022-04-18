import React, { useState } from "react";
import { Card, Divider, Select, Statistic } from "antd";
import "./App.less";
import ZakatProfesi from "./components/ZakatProfesi";
import ZakatHarta from "./components/ZakatHarta";
import ZakatHartaUsaha from "./components/ZakatHartaUsaha";
// import fetch from "node-fetch";
// const ZakatProfesi = React.lazy(() => import("./components/ZakatProfesi"));
// const ZakatHarta = React.lazy(() => import("./components/ZakatHarta"));
// const ZakatHartaUsaha = React.lazy(() =>
//   import("./components/ZakatHartaUsaha")
// );

const { Option } = Select;

function App() {
  const [zakatType, setZakatType] = useState("ZAKAT HARTA");
  const [nisab, setNisab] = useState(1110000);
  const [update, setUpdate] = useState("18 April 2022, pukul 17:26");

  const viewForm = (zakatType) => {
    switch (zakatType) {
      case "ZAKAT HARTA":
        return <ZakatHarta nisab={nisab} update={update} />;

      case "ZAKAT PROFESI":
        return <ZakatProfesi nisab={nisab} update={update} />;

      case "ZAKAT HARTA USAHA":
        return <ZakatHartaUsaha nisab={nisab} update={update} />;

      default:
        break;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Card
        style={{
          margin: "20px",
          maxWidth: "800px",
        }}
      >
        <Select
          style={{ width: "100%" }}
          placeholder="Pilih Jenis Zakat"
          showSearch
          value={zakatType}
          onChange={(value) => setZakatType(value)}
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="ZAKAT HARTA">ZAKAT HARTA</Option>
          <Option value="ZAKAT PROFESI">ZAKAT PROFESI</Option>
          <Option value="ZAKAT HARTA USAHA">ZAKAT HARTA USAHA</Option>
          {/* <Option value="PERHITUNGAN NISAB">PERHITUNGAN NISAB</Option> */}
        </Select>
        <Divider />
        <div>{viewForm(zakatType)}</div>
      </Card>
    </div>
  );
}

export default App;
