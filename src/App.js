import React, { useState } from "react";
import { Card, Divider, Select } from "antd";
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

  const viewForm = (zakatType) => {
    switch (zakatType) {
      case "ZAKAT HARTA":
        return <ZakatHarta />;

      case "ZAKAT PROFESI":
        return <ZakatProfesi />;

      case "ZAKAT HARTA USAHA":
        return <ZakatHartaUsaha />;

      default:
        break;
    }
  };

  React.useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://harga-emas.net/");
      const data = await response;
      console.log(data, "DATA");
    };

    getData();
  }, []);

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
          <Option value="ZAKAT HARTA USAHA">
            ZAKAT HARTA USAHA (PERDAGANGAN / BISNIS LAINNYA)
          </Option>
          {/* <Option value="PERHITUNGAN NISAB">PERHITUNGAN NISAB</Option> */}
        </Select>
        <Divider />
        <div>{viewForm(zakatType)}</div>
      </Card>
    </div>
  );
}

export default App;
