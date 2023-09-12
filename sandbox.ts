import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { FireblocksSDK, InternalWalletAsset } from 'fireblocks-sdk';
import { TransactionArguments, PeerType, WalletContainerResponse, VaultAccountResponse, ExchangeResponse, GasStationInfo } from 'fireblocks-sdk/dist/types';

import { config } from './config';

const keyPath = path.resolve(__dirname, config.fireblocks.secretKeyPath);
const apiSecret = config.fireblocks.secretKeyPath === '' || !fs.existsSync(keyPath) ? '' : fs.readFileSync(keyPath, 'utf8');
const apiKey = config.fireblocks.apiKey;
const apiEndpoint = config.fireblocks.endpoint;

const writeFile = (data: any, fileName: string) => {
	const fs = require('fs');

	fs.writeFile(
		fileName,
		JSON.stringify(data),
		{
			encoding: 'utf8',
			flag: 'w',
			mode: 0o666,
		},
		(err) => {
			if (err) {
				console.log(err);
			} else {
				console.log(`File written ${fileName} successfully\n`);
			}
		},
	);
};

(async () => {
	const fireblocks = new FireblocksSDK(apiSecret, apiKey, apiEndpoint);
	console.log({
		apiEndpoint,
		apiSecret,
		apiKey,
	});

    const supportedAssets = await fireblocks.getSupportedAssets();

    // const listVaultAccounts = await fireblocks.getInternalWallets();

	// const hotVault = await fireblocks.getVaultAccountById('');
	// const operatingVault = await fireblocks.getVaultAccountById(config.fireblocks.operatingVaultId);
	// const depositAddresses = await fireblocks.getVaultAccounts({ namePrefix: await WalletService.getVaultPrefix() });
	const gasStationInfo = await fireblocks.getGasStationInfo();
	// const coldWallet = await fireblocks.getInternalWallet(config.fireblocks.coldWalletId);
	// const custodyCoinbaseWallet = await fireblocks.getInternalWallet(config.fireblocks.custodyCoinbaseWalletId);
	// const custodyKryptodianWallet = await fireblocks.getInternalWallet(config.fireblocks.custodyKryptodianWalletId);
	// const omnibusCoinbaseExchange = await fireblocks.getExchangeAccountById(config.fireblocks.omnibusCoinbaseExchangeId);
	// const apg = await ApgService.getApgBalances();
	// const bitkub = await BitkubService.getBitkubBalances();

	// omnibusCoinbaseExchange.assets = omnibusCoinbaseExchange.assets.filter((asset) => !['TESTUSD'].includes(asset.id));
	// const currencies: Set<string> = new Set();

	// [hotVault, operatingVault, ...depositAddresses, coldWallet, custodyCoinbaseWallet, custodyKryptodianWallet, omnibusCoinbaseExchange, apg, bitkub].map((vault) => {
	// 	if (vault && Array.isArray(vault.assets)) {
	// 		vault.assets.map((asset) => {
	// 			currencies.add(asset.id);
	// 			return null;
	// 		});
	// 	}
	// 	return null;
	// });

	// [hotVault].map((vault) => {
	// 	if (vault && Array.isArray(vault.assets)) {
	// 		vault.assets.map((asset) => {
	// 			currencies.add(asset.id);
	// 			return null;
	// 		});
	// 	}
	// 	return null;
	// });

	// const currenciesArray = Array.from(currencies);

	const resp = {
		gasStationInfo,
        // supportedAssets,
        // gasStationInfo,
        // listVaultAccounts,
		// currencies: currenciesArray,
		// hotVault,
		// operatingVault,
		// depositAddresses,
		// gasStationInfo,
		// coldWallet,
		// custodyCoinbaseWallet,
		// custodyKryptodianWallet,
		// omnibusCoinbaseExchange,
		// apg,
		// bitkub,
	};
    console.log(resp);

	writeFile(resp, `wallet-monitoring-${new Date().getTime()}.json`);
})();
