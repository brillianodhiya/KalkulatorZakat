import {
  Button,
  Col,
  Divider,
  Form,
  Grid,
  InputNumber,
  Row,
  Statistic,
  Steps,
  Typography,
} from "antd";
import React from "react";
import { GoldOutlined } from "@ant-design/icons";

const { Step } = Steps;

const { useBreakpoint } = Grid;

const ZakatHartaUsaha = ({ nisab = 0, update }) => {
  const screens = useBreakpoint();
  const [form] = Form.useForm();
  const [current, setCurrent] = React.useState(1);
  const [cekHasil, setCekHasil] = React.useState(false);

  React.useEffect(() => {
    if (!screens.md) {
      setCurrent(2);
      setCekHasil(true);
    } else {
      setCurrent(1);
      setCekHasil(false);
    }
  }, [screens]);

  return (
    <div>
      <p style={{ color: "#00B171" }}>
        ZAKAT HARTA USAHA (PERDAGANGAN / BISNIS LAINNYA)
      </p>

      <Row>
        <Col
          xs={0}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          style={{ marginTop: "12px" }}
        >
          <Steps
            current={current}
            size="small"
            direction={!screens.md ? "vertical" : "horizontal"}
          >
            <Step
              title="Pilih Type Zakat"
              description="Tentukan zakat ingin di hitung."
            />
            <Step
              title="Input Data"
              description="Masukkan data (Nominal) yang diperlukan."
            />
            <Step
              title="Cek Hasil"
              description="Hasil perhitungan zakat akan dimunculkan disini."
            />
          </Steps>
        </Col>
        <Col span={24}>
          <Statistic
            style={{ marginTop: "8px" }}
            title={
              <Typography.Title level={5}>
                Emas Antam | Update: {update}
              </Typography.Title>
            }
            value={`Rp. ${nisab}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            prefix={<GoldOutlined />}
            valueStyle={{ color: "#00B171" }}
            suffix="/gram"
          />

          <Divider />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          style={{ marginTop: "12px" }}
        >
          <Form form={form} layout="vertical" name="zakat-harta">
            <Form.Item
              label="Nisab (85 gram emas)"
              initialValue={nisab * 85}
              //   requiredMark="optional"
              name="nisab"
            >
              <InputNumber
                style={{ width: "100%" }}
                prefix="Rp. "
                min={0}
                placeholder="Masukkan Nominal"
                readOnly
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }
                parser={(value) => value.replace(/\$\s?|([.]*)/g, "")}
              />
            </Form.Item>
            <Form.Item
              label="a. Nilai Kekayaan Perusahaan (termasuk uang tunai, simpanan di bank, real estate, alat produksi, inventori, barang jadi, dll)"
              initialValue={0}
              //   requiredMark="optional"
              name="a"
              tooltip="Masukkan nilai kekayaan perusahaan (termasuk uang tunai, simpanan di bank, real estate, alat produksi, inventori, barang jadi, dll)"
            >
              <InputNumber
                style={{ width: "100%" }}
                prefix="Rp. "
                min={0}
                placeholder="Masukkan Nominal"
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }
                parser={(value) => value.replace(/\$\s?|([.]*)/g, "")}
              />
            </Form.Item>
            <Form.Item
              label="b. Utang perusahaan jatuh tempo"
              initialValue={0}
              name="b"
              //   requiredMark="optional"
              tooltip="Masukkan utang perusahaan jatuh tempo"
            >
              <InputNumber
                style={{ width: "100%" }}
                prefix="Rp. "
                min={0}
                placeholder="Masukkan Nominal"
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }
                parser={(value) => value.replace(/\$\s?|([.]*)/g, "")}
              />
            </Form.Item>
            <Form.Item
              label="c. Komposisi Kepemilikan (dalam persen)"
              initialValue={100}
              name="c"
              //   requiredMark="optional"
              tooltip="Masukkan jumlah aset yang telah tersimpan selama satu tahun."
            >
              <InputNumber
                //   defaultValue={100}
                style={{ width: "100%" }}
                min={0}
                max={100}
                formatter={(value) => `${value}%`}
                parser={(value) => value.replace("%", "")}
                placeholder="Masukkan Nominal"
              />
            </Form.Item>

            <Form.Item
              shouldUpdate={(prevValues, curValues) =>
                prevValues.a !== curValues.a ||
                prevValues.b !== curValues.b ||
                prevValues.c !== curValues.c
              }
              noStyle
            >
              {() => {
                let jml = 0;
                const a = form.getFieldValue("a") ? form.getFieldValue("a") : 0;
                const b = form.getFieldValue("b") ? form.getFieldValue("b") : 0;
                const c = form.getFieldValue("c") ? form.getFieldValue("c") : 0;

                jml = (c * (a - b)) / 100;

                // console.log(jml);
                form.setFields([
                  {
                    name: "d",
                    value: jml,
                  },
                ]);

                return (
                  <Form.Item
                    label="d. Jumlah Bersih Harta Usaha (c% x (a-b))"
                    name="d"
                    initialValue={0}
                    //   requiredMark="optional"
                    // tooltip="Masukkan jumlah harta simpanan yang telah tersimpan selama satu tahun."
                  >
                    <InputNumber
                      readOnly
                      style={{ width: "100%" }}
                      prefix="Rp. "
                      min={0}
                      placeholder="Masukkan Nominal"
                      formatter={(value) =>
                        `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                      }
                      parser={(value) => value.replace(/\$\s?|([.]*)/g, "")}
                    />
                  </Form.Item>
                );
              }}
            </Form.Item>

            <Form.Item
              shouldUpdate={(prevValues, curValues) =>
                prevValues.d !== curValues.d
              }
              noStyle
            >
              {() => {
                let jml = 0;
                const d = form.getFieldValue("d") ? form.getFieldValue("d") : 0;

                jml = d;

                // console.log(jml);
                form.setFields([
                  {
                    name: "e",
                    value: jml > nisab * 85 ? jml : 0,
                  },
                ]);

                return (
                  <Form.Item
                    label="e. Harta usaha kena zakat (d, jika &gt; nisab)"
                    name="e"
                    initialValue={0}
                    //   requiredMark="optional"
                    // tooltip="Masukkan jumlah harta simpanan yang telah tersimpan selama satu tahun."
                  >
                    <InputNumber
                      readOnly
                      style={{ width: "100%" }}
                      prefix="Rp. "
                      min={0}
                      placeholder="Masukkan Nominal"
                      formatter={(value) =>
                        `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                      }
                      parser={(value) => value.replace(/\$\s?|([.]*)/g, "")}
                    />
                  </Form.Item>
                );
              }}
            </Form.Item>

            <Form.Item
              style={{
                textAlign: "right",
                display: !cekHasil ? "block" : "none",
              }}
            >
              <Button
                type="primary"
                onClick={() => {
                  setCekHasil(true);
                  setCurrent(2);
                }}
              >
                Cek Hasil
              </Button>
            </Form.Item>

            <div
              style={{
                display: cekHasil ? "block" : "none",
              }}
            >
              <Divider />
              <Form.Item
                shouldUpdate={(prevValues, curValues) =>
                  prevValues.e !== curValues.e
                }
                noStyle
              >
                {() => {
                  let jml = 0;
                  const e = form.getFieldValue("e")
                    ? form.getFieldValue("e")
                    : 0;

                  jml = (2.5 / 100) * e;

                  return (
                    <Statistic
                      prefix="Rp. "
                      style={{ textAlign: "center" }}
                      valueStyle={{ color: "#00B171" }}
                      title={
                        <h3>
                          JUMLAH ZAKAT ATAS HARTA USAHA YANG WAJIB DIBAYARKAN
                          PER TAHUN (2,5% X e)
                        </h3>
                      }
                      value={`${jml}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    />
                  );
                }}
              </Form.Item>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ZakatHartaUsaha;
