import React, { useState } from "react";
import { Card, Divider, Select } from "antd";
import "./App.less";

const ZakatHartaForm = React.lazy(() => import("./components/ZakatHarta"));

const { Option } = Select;

function App() {
  const [zakatType, setZakatType] = useState("ZAKAT HARTA");

  const viewForm = (zakatType) => {
    switch (zakatType) {
      case "ZAKAT HARTA":
        return <ZakatHartaForm />;

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
          <Option value="PERHITUNGAN NISAB">PERHITUNGAN NISAB</Option>
        </Select>
        <Divider />
        <div>{viewForm(zakatType)}</div>
      </Card>
    </div>
  );
}

export default App;
