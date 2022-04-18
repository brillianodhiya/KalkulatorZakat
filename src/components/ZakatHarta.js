import {
  Button,
  Col,
  Divider,
  Form,
  Grid,
  InputNumber,
  Row,
  Space,
  Statistic,
  Steps,
  Typography,
} from "antd";
import React from "react";
import { GoldOutlined } from "@ant-design/icons";

const { Step } = Steps;

const { useBreakpoint } = Grid;

const ZakatHarta = ({ nisab = 0, update }) => {
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
        ZAKAT HARTA YANG TELAH TERSIMPAN SATU TAHUN
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
                Nisab | Update: {update}
              </Typography.Title>
            }
            value={`Rp. ${nisab}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            prefix={<GoldOutlined />}
            valueStyle={{ color: "#00B171" }}
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
              label="a. Uang Tunai, Tabungan, Deposito atau sejenisnya"
              initialValue={0}
              //   requiredMark="optional"
              name="a"
              tooltip="Masukkan jumlah uang tunai, tabungan, deposito atau sejenisnya yang telah tersimpan selama satu tahun."
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
              label="b. Saham atau surat-surat berharga lainnya"
              initialValue={0}
              name="b"
              //   requiredMark="optional"
              tooltip="Masukkan jumlah saham atau surat-surat berharga lainnya yang telah tersimpan selama satu tahun."
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
              label="c. Real Estate (tidak termasuk rumah tinggal yang dipakai sekarang)"
              initialValue={0}
              name="c"
              //   requiredMark="optional"
              tooltip="Masukkan jumlah aset yang telah tersimpan selama satu tahun."
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
              label="d. Emas, Perak, Permata atau sejenisnya"
              initialValue={0}
              name="d"
              //   requiredMark="optional"
              tooltip="Masukkan jumlah emas, perak, permata atau sejenisnya yang telah tersimpan selama satu tahun."
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
              label="e. Mobil (lebih dari keperluan pekerjaan anggota keluarga)"
              initialValue={0}
              name="e"
              //   requiredMark="optional"
              tooltip="Masukkan jumlah mobil yang telah tersimpan selama satu tahun."
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
              shouldUpdate={(prevValues, curValues) =>
                prevValues.a !== curValues.a ||
                prevValues.b !== curValues.b ||
                prevValues.c !== curValues.c ||
                prevValues.d !== curValues.d ||
                prevValues.e !== curValues.e
              }
              noStyle
            >
              {() => {
                let jml = 0;
                const a = form.getFieldValue("a") ? form.getFieldValue("a") : 0;
                const b = form.getFieldValue("b") ? form.getFieldValue("b") : 0;
                const c = form.getFieldValue("c") ? form.getFieldValue("c") : 0;
                const d = form.getFieldValue("d") ? form.getFieldValue("d") : 0;
                const e = form.getFieldValue("e") ? form.getFieldValue("e") : 0;

                jml = a + b + c + d + e;

                // console.log(jml);
                form.setFields([
                  {
                    name: "f",
                    value: jml,
                  },
                ]);

                return (
                  <Form.Item
                    label="f. Jumlah Harta Simpanan (A+B+C+D+E)"
                    name="f"
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
              label="g. Hutang Pribadi yg jatuh tempo dalam tahun ini"
              initialValue={0}
              name="g"
              //   requiredMark="optional"
              tooltip="Masukkan jumlah hutang pribadi yang telah jatuh tempo selama satu tahun."
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
              shouldUpdate={(prevValues, curValues) =>
                prevValues.f !== curValues.f || prevValues.g !== curValues.g
              }
              noStyle
            >
              {() => {
                let jml = 0;
                const f = form.getFieldValue("f") ? form.getFieldValue("f") : 0;
                const g = form.getFieldValue("g") ? form.getFieldValue("g") : 0;

                jml = f - g;

                // console.log(jml);
                form.setFields([
                  {
                    name: "h",
                    value: jml > nisab ? jml : 0,
                  },
                ]);

                return (
                  <Form.Item
                    label="h. Harta simpanan kena zakat(F-G, jika &gt; nisab)"
                    name="h"
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
                  prevValues.h !== curValues.h
                }
                noStyle
              >
                {() => {
                  let jml = 0;
                  const h = form.getFieldValue("h")
                    ? form.getFieldValue("h")
                    : 0;

                  jml = (2.5 / 100) * h;

                  return (
                    <Statistic
                      prefix="Rp. "
                      style={{ textAlign: "center" }}
                      valueStyle={{ color: "#00B171" }}
                      title={
                        <h3>
                          JUMLAH ZAKAT ATAS SIMPANAN YANG WAJIB DIBAYARKAN PER
                          TAHUN (2,5% x H)
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

export default ZakatHarta;
