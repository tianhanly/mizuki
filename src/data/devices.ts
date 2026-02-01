// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	phone: [
		{
			name: "Huawei P40 Pro",
			image: "/images/device/huawei-p40-pro.png",
			specs: "8G + 256GB",
			description: "主用机",
			link: "https://consumer.huawei.com/cn/support/phones/p40-pro/",
		},
	],
	computer: [
		{
			name: "rtx4060",
			image: "/images/device/rtx4060.png",
			specs: "8GB GDDR4",
			description: "勉强够用",
			link: "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4060-4060ti/",
		},
	],
};
