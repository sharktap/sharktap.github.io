


const scriptsInEvents = {

	async Sdk_Event1_Act1(runtime, localVars)
	{
		runtime.globalVars.curDate = new Date().toLocaleString('en', {
		 year: 'numeric',
		 month: '2-digit',
		 day: '2-digit',
		});
	},

	async Sdk_Event2_Act1(runtime, localVars)
	{
var tonConnectUI

globalThis.tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
	manifestUrl: `${runtime.globalVars.domain}/tonconnect-manifest.json`,
	twaReturnUrl: runtime.globalVars.domain
});

console.log("TON Ready!");
runtime.callFunction("restoreTON");
	},

	async Sdk_Event3_Act1(runtime, localVars)
	{
		const connectedWallet = await tonConnectUI.connectWallet();
		runtime.globalVars.userWallet = tonConnectUI.account.address;
		console.log("Wallet:", runtime.globalVars.userWallet);
		runtime.callFunction("btnTON", 2);
	},

	async Sdk_Event4_Act1(runtime, localVars)
	{
		tonConnectUI.connectionRestored.then(restored => {
		    if (restored) {
				console.log('Connection restored');
				runtime.globalVars.userWallet = tonConnectUI.account.address;
				console.log("Wallet:", runtime.globalVars.userWallet);
				runtime.callFunction("btnTON", 2);
		    } else {
				runtime.callFunction("btnTON", 0);
		        console.log('Connection was not restored.');
		    }
		});
	},

	async Sdk_Event5_Act1(runtime, localVars)
	{
		await tonConnectUI.disconnect();
		console.log('TON disconnected');
		await new Promise(resolve => setTimeout(resolve, 250));
		runtime.callFunction("restoreTON");
	},

	async Sdk_Event6_Act1(runtime, localVars)
	{
const contractAddress = 'EQDGxETg0oyRuVhwZiXk-bjR1UwAUn4LqUSaXEa1w3yDbZSO';
const itemPrice = '0.023'; // TON価格

// コントラクトに0.023 TONを送信してアイテムを購入
    try {
        const transaction = {
            to: contractAddress,           // コントラクトのアドレス
            value: toNano(itemPrice),      // 商品の価格 (ナノTON)
            stateInit: null,
            bounce: true,
        };

        await tonConnectUI.sendTransaction(transaction);
        console.log('Item purchased successfully!');

        // 購入番号を取得（例: 1番目の購入者）
        const sendCoins = SendCoins.fromAddress(Address.parse(contractAddress));
        const purchaseIndex = await sendCoins.getPurchaseIndex(1n);
        console.log(`Your purchase index: ${purchaseIndex}`);

    } catch (error) {
        console.error('Failed to purchase item:', error);
    }
	},

	async Sdk_Event7_Act1(runtime, localVars)
	{
		// TonWebの初期化
		const tonweb = new TonWeb();

		const contractAddress = 'kQBdCukjgAO91eFigxNPGRDhW-GqX6PEvzKIR2ouBUL_HOsx';
		
		
 		try {
        // ウォレット接続チェック
        const providerState = await tonConnectUI.getWallet();
        if (!providerState) {
            throw new Error('No wallet connected. Please connect your wallet.');
        }

        // ウォレット経由でコントラクトを開く
        const sendCoins = tonweb.openContract(SendCoins.fromAddress(contractAddress));

        // 残高を取得
        const balance = await sendCoins.getBalance();
        console.log(`Contract balance: ${balance}`);

        // すべてのアイテムを取得
        const allItems = await sendCoins.getAllItems();
        console.log(`All items: ${JSON.stringify(allItems)}`);

        // 特定の購入番号を取得
        const purchaseIndex = await sendCoins.getPurchaseIndex(1n);
        console.log(`Your purchase index: ${purchaseIndex}`);

    } catch (error) {
        console.error('Error during contract call:', error);
    }
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

