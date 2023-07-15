class TaskApi {
	private _url: string;
	private _bonusUrl: string;

	constructor(options: { url: string; bonusUrl: string }) {
		this._url = options.url;
		this._bonusUrl = options.bonusUrl;
	}

	private static _checkResult = async (res: Response) => {
		if (res.status === 204) {
			return res;
		}
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(new Error(`Ошибка: ${res}`));
	};

	async createToken() {
		const res = await fetch(`${this._url}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'AccessKey': '891cf53c-01fc-4d74-a14c-592668b7a03c',
			},
			body: JSON.stringify({
				idClient: '{2c44d8c2-c89a-472e-aab3-9a8a29142315}',
				paramValue: '{7db72635-fd0a-46b9-813b-1627e3aa02ea}',
			}),
		});
		return TaskApi._checkResult(res);
	}

	async getBonus(token: string) {
		const res = await fetch(`${this._bonusUrl}/${token}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'AccessKey': '891cf53c-01fc-4d74-a14c-592668b7a03c',
			},
		});
		return TaskApi._checkResult(res);
	}
}

const taskApi = new TaskApi({
	url: 'http://84.201.188.117:5021/api/v3/clients/accesstoken',
	bonusUrl: 'http://84.201.188.117:5003/api/v3/ibonus/generalinfo',
});

export default taskApi;