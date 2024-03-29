import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

function DocSidebar() {
  return (
    <div className='sidebar'>
    <ProSidebar>
    <Menu iconShape="square">
        <MenuItem><Link to="/docs">Homepage</Link></MenuItem>
        <SubMenu title="QuickStart">
          <MenuItem><Link to="/docs">Quickstart</Link></MenuItem>
          <MenuItem>Install</MenuItem>
          <MenuItem>Overview</MenuItem>
          <MenuItem><Link to="txntutorial">Signing a Transaction (sdk)</Link></MenuItem>
          <MenuItem><Link to="txntutorial">Signing a Transaction (snapalgo)</Link></MenuItem>
        </SubMenu>
        <SubMenu title="SnapAlgoSDK">
          <MenuItem>SDK overview</MenuItem>
          <MenuItem><Link to="base64decode">base64Decode</Link></MenuItem>
          <MenuItem><Link to="base64encode">base64Encode</Link></MenuItem>
          <MenuItem><Link to="enable">enable</Link></MenuItem>
          <MenuItem><Link to="encodetxn">encodeTxn</Link></MenuItem>
          <MenuItem><Link to="ezsign">EZsign</Link></MenuItem>
          <MenuItem><Link to="ezsignandpost">EZsignAndPost</Link></MenuItem>
          <MenuItem><Link to="ezsignsmartsig">EZsignSmartSig</Link></MenuItem>
          <MenuItem><Link to="algod">getAlgodv2Client</Link></MenuItem>
          <MenuItem><Link to="indexer">getIndexerClient</Link></MenuItem>
          <MenuItem><Link to="post">postTxns</Link></MenuItem>
          <MenuItem><Link to="signandpost">signAndPostTxns</Link></MenuItem>
          <MenuItem><Link to="sign">signTxns</Link></MenuItem>
        </SubMenu>
        <SubMenu title="npm:algorand">
          <MenuItem><Link to="npmquickstart">Snap Overview</Link></MenuItem>
          <MenuItem><Link to="npmappoptin">AppOptIn</Link></MenuItem>
          <MenuItem><Link to="npmassetoptin">AssetOptIn</Link></MenuItem>
          <MenuItem><Link to="npmassetoptout">AssetOptOut</Link></MenuItem>
          <MenuItem><Link to="npmclearaccounts">clearAccounts</Link></MenuItem>
          <MenuItem><Link to="npmcreateaccount">createAccount</Link></MenuItem>
          <MenuItem><Link to="npmdisplaybalance">displayBalance</Link></MenuItem>
          <MenuItem><Link to="npmdisplaymnemonic">displayMnemonic</Link></MenuItem>
          <MenuItem><Link to="npmenable">enable</Link></MenuItem>
          <MenuItem><Link to="npmencodetransaction">encodeTransaction</Link></MenuItem>
          <MenuItem><Link to="npmencodetransactions">encodeTransactions</Link></MenuItem>
          <MenuItem><Link to="npmgetaccount">getAccount</Link></MenuItem>
          <MenuItem><Link to="npmgetaccounts">getAccounts</Link></MenuItem>
          <MenuItem><Link to="npmgetaddress">getAddress</Link></MenuItem>
          <MenuItem><Link to="npmgetassetbyid">getAssetById</Link></MenuItem>
          <MenuItem><Link to="npmgetassets">getAssets</Link></MenuItem>
          <MenuItem><Link to="npmgetbalance">getBalance</Link></MenuItem>
          <MenuItem><Link to="npmgetcurrentaccount">getCurrentAccount</Link></MenuItem>
          <MenuItem><Link to="npmgettxns">getTransactions</Link></MenuItem>
          <MenuItem><Link to="npmimportaccount">importAccount</Link></MenuItem>
          <MenuItem><Link to="npmisvalidaddress">isValidAddress</Link></MenuItem>
          <MenuItem><Link to="npmposttransactions">postTxns</Link></MenuItem>
          <MenuItem><Link to="npmsecurereceive">secureReceive</Link></MenuItem>
          <MenuItem><Link to="npmsetaccount">setAccount</Link></MenuItem>
          <MenuItem><Link to="npmsignandposttransactions">signAndPostTxns</Link></MenuItem>
          <MenuItem><Link to="npmsigndata">signData</Link></MenuItem>
          <MenuItem><Link to="npmsignlogicsig">signLogicSig</Link></MenuItem>
          <MenuItem><Link to="npmsigntransactions">signTxns</Link></MenuItem>
          <MenuItem><Link to="npmtransfer">transfer</Link></MenuItem>
          <MenuItem><Link to="npmtransferasset">transferAsset</Link></MenuItem>
          <MenuItem><Link to="npmuint8arraytobase64">Uint8ArrayToBase64</Link></MenuItem>
        </SubMenu>
        <SubMenu title="Types">
          <MenuItem><Link to="AccountObj">AccountObj</Link></MenuItem>
          <MenuItem><Link to="EnabledWalletObject">EnabledWalletObject</Link></MenuItem>
          <MenuItem><Link to="AlgoAddress">AlgoAddress</Link></MenuItem>
          <MenuItem><Link to="WalletTransaction">WalletTransaction</Link></MenuItem>
          <MenuItem><Link to="SignedTxn">SignedTxn</Link></MenuItem>
          <MenuItem><Link to="EncodedTxn">EncodedTxn</Link></MenuItem>
          <MenuItem><Link to="algosdkTransaction">algosdk.Transaction</Link></MenuItem>
          <MenuItem><Link to="EthAddress">EthAddress</Link></MenuItem>
          <MenuItem><Link to="SwapHistory">SwapHistory</Link></MenuItem>
          <MenuItem><Link to="SwapStatus">SwapStatus</Link></MenuItem>
          <MenuItem><Link to="Ticker">Ticker</Link></MenuItem>
          <MenuItem><Link to="PreSwapData">PreSwapData</Link></MenuItem>
        </SubMenu>
    </Menu>
    </ProSidebar>
    </div>
  );
}

export default DocSidebar;
