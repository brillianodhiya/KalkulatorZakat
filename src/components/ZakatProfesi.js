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

const ZakatProfesi = ({ nisab = 0, update }) => {
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
          <Form form={form} layout="vertical" name="zakat-profesi">
            <Form.Item
              label="a. Pendapatan / Gaji per Bulan (setelah dipotong pajak)"
              initialValue={0}
              //   requiredMark="optional"
              name="a"
              tooltip="Masukkan jumlah pendapatan / gaji per bulan (setelah dipotong pajak)"
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
              label="b. Bonus/pendapatan lain-lain selama setahun"
              initialValue={0}
              name="b"
              //   requiredMark="optional"
              tooltip="Masukkan jumlah bonus / pendapatan lain-lain selama setahun"
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
                prevValues.a !== curValues.a || prevValues.b !== curValues.b
              }
              noStyle
            >
              {() => {
                let jml = 0;
                const a = form.getFieldValue("a") ? form.getFieldValue("a") : 0;
                const b = form.getFieldValue("b") ? form.getFieldValue("b") : 0;

                jml = a * 12 + b;

                // console.log(jml);
                form.setFields([
                  {
                    name: "c",
                    value: jml,
                  },
                ]);

                return (
                  <Form.Item
                    label="c. Jumlah Pendapatan per Tahun"
                    name="c"
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
              label="d. Rata-rata pengeluaran rutin per bulan (kebutuhan fisik, air, listrik, pendidikan, kesehatan, transportasi, dll)"
              initialValue={0}
              name="d"
              //   requiredMark="optional"
              tooltip="Masukkan jumlah rata-rata pengeluaran rutin per bulan (kebutuhan fisik, air, listrik, pendidikan, kesehatan, transportasi, dll)"
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
              label="e. Pengeluaran lainnya dalam satu tahun (pendidikan, kesehatan, dll)"
              initialValue={0}
              name="e"
              //   requiredMark="optional"
              tooltip="Masukkan jumlah pengeluaran lainnya dalam satu tahun (pendidikan, kesehatan, dll)"
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
                prevValues.d !== curValues.d || prevValues.e !== curValues.e
              }
              noStyle
            >
              {() => {
                let jml = 0;
                const d = form.getFieldValue("d") ? form.getFieldValue("d") : 0;
                const e = form.getFieldValue("e") ? form.getFieldValue("e") : 0;

                jml = 12 * d + e;

                // console.log(jml);
                form.setFields([
                  {
                    name: "f",
                    value: jml,
                  },
                ]);

                return (
                  <Form.Item
                    label="f. Jumlah Pengeluaran per Tahun (12 x d + e)"
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
              shouldUpdate={(prevValues, curValues) =>
                prevValues.c !== curValues.c || prevValues.f !== curValues.f
              }
              noStyle
            >
              {() => {
                let jml = 0;
                const c = form.getFieldValue("c") ? form.getFieldValue("c") : 0;
                const f = form.getFieldValue("f") ? form.getFieldValue("f") : 0;

                jml = c - f;

                // console.log(jml);
                form.setFields([
                  {
                    name: "g",
                    value: jml > nisab ? jml : 0,
                  },
                ]);

                return (
                  <Form.Item
                    label="g. Penghasilan kena zakat (C – F , jika &gt; nisab)"
                    name="g"
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
                  prevValues.g !== curValues.g
                }
                noStyle
              >
                {() => {
                  let jml = 0;
                  const g = form.getFieldValue("g")
                    ? form.getFieldValue("g")
                    : 0;

                  jml = (2.5 / 100) * g;

                  return (
                    <Statistic
                      prefix="Rp. "
                      style={{ textAlign: "center" }}
                      valueStyle={{ color: "#00B171" }}
                      title={
                        <h3>
                          JUMLAH ZAKAT PROFESI YANG WAJIB DIBAYARKAN PER TAHUN
                          (2,5% x g)
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

export default ZakatProfesi;
