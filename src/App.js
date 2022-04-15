import React, { useState } from "react";
import { Card, Divider, Select } from "antd";
import "./App.less";

const { Option } = Select;

function App() {
  const [zakatType, setZakatType] = useState(
    "ZAKAT HARTA YANG TELAH TERSIMPAN SATU TAHUN"
  );
  return (
    <Card
      style={{
        margin: "24px",
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
        <Option value="ZAKAT HARTA YANG TELAH TERSIMPAN SATU TAHUN">
          ZAKAT HARTA YANG TELAH TERSIMPAN SATU TAHUN
        </Option>
      </Select>
      <Divider />
    </Card>
  );
}

export default App;
