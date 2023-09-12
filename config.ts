import dotenv from 'dotenv';

dotenv.config();

export const config = {
	fireblocks: {
		endpoint: process.env.FIREBLOCKS_ENDPOINT || '',
		apiKey: process.env.FIREBLOCKS_API_KEY || '',
		secretKeyPath: process.env.FIREBLOCKS_SECRET_KEY_PATH || '',
		mainVaultId: process.env.FIREBLOCKS_MAIN_VAULT_ID || '',
		operatingVaultId: process.env.FIREBLOCKS_OPERATING_VAULT_ID || '',
		coldWalletId: process.env.FIREBLOCKS_COLD_WALLET_ID || '',
		custodyCoinbaseWalletId: process.env.FIREBLOCKS_CUSTODY_COINBASE_WALLET_ID || '',
		custodyKryptodianWalletId: process.env.FIREBLOCKS_CUSTODY_KRYPTODIAN_WALLET_ID || '',
		omnibusCoinbaseExchangeId: process.env.FIREBLOCKS_OMNIBUS_COINBASE_EXCHANGE_ID || '',
		webhookPublicKey: process.env.FIREBLOCKS_WEBHOOK_PUBLIC_KEY?.replace(/\\n/g, '\n') || '',
	},
};
