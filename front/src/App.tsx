import React, { useEffect, useState } from 'react';
import { Layout, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/lib/table';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const HOST = 'http://l:3000';

export interface Snapshot {
  address: string;
  mirrorAddress: string;
  votes: number;
  available: number;
  poolAddress?: string;
  firstShot: number;
  delta: number;
  estimatedPPI?: number;
}

const columns: ColumnsType<Snapshot> = [
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'FirstShot Votes',
    dataIndex: 'firstShot',
    key: 'firstShot',
    // render: (v) => v * 1000,
  },
  {
    title: 'Current Votes',
    dataIndex: 'available',
    key: 'available',
    // render: (v) => v * 1000,
  },
  {
    title: 'Delta',
    dataIndex: 'delta',
    key: 'delta',
  },
  {
    title: 'Estimated PPI',
    dataIndex: 'estimatedPPI',
    key: 'estimatedPPI',
  },
  {
    title: 'PoolAddress',
    dataIndex: 'poolAddress',
    key: 'poolAddress',
  },
];

export interface SnapshotSummary {
  totalDelta: number;
  rewardPerCFX: number;
}

function App() {
  /* const [data, setData] = useState<Snapshot[]>([]);
  useEffect(() => {
    fetchSnapshots().then(setData)
  }, []); */

  const [summary, setSummary] = useState<SnapshotSummary>({totalDelta: 0, rewardPerCFX: 0});
  useEffect(() => {
    fetchSnapshotSummary().then(setSummary)
  }, []);

  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          {/* <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`,
            }))}
          /> */}
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 880, textAlign: 'center', paddingTop: '150px', fontSize: '25px' }}>
            <h1>Current Incremental value since the first snapshot: <Text type="success">{summary.totalDelta * 1000} CFX</Text></h1>
            <h1>Per CFX Airdrop: <Text type="success">{summary.rewardPerCFX.toFixed(5)} PPI</Text></h1>
            {/* <p>
              Note: 1 Vote = 1000 CFX. The second round air drop amount is 300w * 70%. Check details at&nbsp;
              <a href="https://forum.conflux.fun/t/conflux-pos-pool-airdrop-announcement/15302">here</a>
            </p>
            <Table columns={columns} dataSource={data} rowKey='address' pagination={{pageSize: 1000}} /> */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2022 Conflux</Footer>
      </Layout>
    </div>
  );
}

export default App;

async function fetchSnapshotSummary () {
  return fetch(`${HOST}/snapshots/summary`).then(response => response.json());
}

async function fetchSnapshots () {
  return fetch(`${HOST}/snapshots`).then(response => response.json());
}
