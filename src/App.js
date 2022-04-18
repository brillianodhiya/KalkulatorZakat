import React, { useState } from "react";
import { Card, Divider, Select } from "antd";
import "./App.less";
import ZakatProfesi from "./components/ZakatProfesi";
import ZakatHarta from "./components/ZakatHarta";
import ZakatHartaUsaha from "./components/ZakatHartaUsaha";
import moment from "moment";
import "moment/locale/id";

moment.locale("id");

const { Option } = Select;

function App() {
  const [zakatType, setZakatType] = useState("ZAKAT HARTA");
  const [nisab, setNisab] = useState(1110000);
  const [update, setUpdate] = useState(
    moment("18-04-2022 18:00", "DD-MM-YYYY HH:mm").format("LLL")
  );

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
          // margin: "20px",
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
