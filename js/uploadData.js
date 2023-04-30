const data = [
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i3 9350",
			gpu: "GT 710 2GB",
			ram: "8GB Corsair",
			hdd: "1TB",
		},
		price: "30,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i3 9350K",
			gpu: "GT 710 2GB",
			ram: "8GB Corsair",
			hdd: "2TB",
		},
		price: "33,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i5 9550K",
			gpu: "GT 710 2GB",
			ram: "16GB Corsair",
			hdd: "2TB",
		},
		price: "40,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i5 9500",
			gpu: "GTX 1650",
			ram: "16GB Corsair",
			hdd: "2TB",
		},
		price: "50,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 9700K",
			gpu: "GTX 750",
			ram: "8GB Corsair",
			hdd: "1TB",
		},
		price: "45,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 9700",
			gpu: "GTX 1050Ti",
			ram: "8GB Corsair",
			hdd: "500GB",
		},
		price: "48,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 9900K",
			gpu: "GTX 1650 Ti",
			ram: "16GB Corsair",
			hdd: "2TB",
		},
		price: "55,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 9900",
			gpu: "GTX 1660",
			ram: "16GB Corsair",
			hdd: "2TB",
		},
		price: "60,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i3 10100",
			gpu: "GTX 1650Ti",
			ram: "8GB Corsair",
			hdd: "2TB",
		},
		price: "66,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i5 10400",
			gpu: "GTX 1650",
			ram: "16GB Corsair",
			hdd: "3TB",
		},
		price: "70,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i5 10600",
			gpu: "GTX 1660Ti",
			ram: "16GB Corsair",
			hdd: "1TB",
		},
		price: "72,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i5 10600",
			gpu: "RTX 2060",
			ram: "16GB Corsair",
			hdd: "2TB",
		},
		price: "77,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 10700K",
			gpu: "RTX 2060Ti",
			ram: "8GB Corsair",
			hdd: "2TB",
		},
		price: "80,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 10700",
			gpu: "RTX 2060",
			ram: "16GB Corsair",
			hdd: "4TB",
		},
		price: "85,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 10900K",
			gpu: "GTX 1660",
			ram: "8GB Corsair",
			hdd: "2TB",
		},
		price: "73,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 10900",
			gpu: "RTX 2070",
			ram: "16GB Corsair",
			hdd: "4TB",
		},
		price: "85,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i5 11500",
			gpu: "RTX 2070 SUPER",
			ram: "16GB Corsair",
			hdd: "4TB",
		},
		price: "88,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i5 11600",
			gpu: "RTX 2070",
			ram: "32GB Corsair",
			hdd: "4TB",
		},
		price: "93,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 11700",
			gpu: "RTX 2080",
			ram: "8GB Corsair",
			hdd: "1TB",
		},
		price: "90,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 11700K",
			gpu: "RTX 2080",
			ram: "8GB Corsair",
			hdd: "1TB",
		},
		price: "83,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 11900",
			gpu: "RTX 2080",
			ram: "16GB Corsair",
			hdd: "4TB",
		},
		price: "95,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 11900K",
			gpu: "RTX 2080 SUPER",
			ram: "16GB Corsair",
			hdd: "4TB",
		},
		price: "1,00,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 11700K",
			gpu: "RTX 3070",
			ram: "16GB Corsair",
			hdd: "2TB",
		},
		price: "1,00,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 11700",
			gpu: "RTX 3060",
			ram: "8GB Corsair",
			hdd: "1TB",
		},
		price: "99,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i3 12300",
			gpu: "RTX 3060",
			ram: "8GB Corsair",
			hdd: "2TB",
		},
		price: "1,10,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i5 12500",
			gpu: "RTX 3070",
			ram: "16GB Corsair",
			hdd: "4TB",
		},
		price: "1,15,000",
	},

	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i5 12600",
			gpu: "RTX 3070",
			ram: "8GB Corsair",
			hdd: "2TB",
		},
		price: "1,15,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i5 12600K",
			gpu: "RTX 3070",
			ram: "16GB Corsair",
			hdd: "4TB",
		},
		price: "1,20,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 12700",
			gpu: "RTX 3070Ti",
			ram: "16GB Corsair",
			hdd: "4TB",
		},
		price: "1,25,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 12700",
			gpu: "RTX 3070",
			ram: "8GB Corsair",
			hdd: "4TB",
		},
		price: "1,20,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 12700K",
			gpu: "RTX 3070Ti",
			ram: "32GB Corsair",
			hdd: "2TB",
		},
		price: "1,25,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 12700",
			gpu: "RTX 3080",
			ram: "16GB Corsair",
			hdd: "4TB",
		},
		price: "1,30,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 12900",
			gpu: "RTX 3070",
			ram: "8GB Corsair",
			hdd: "4TB",
		},
		price: "1,30,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 12900",
			gpu: "RTX 3080Ti",
			ram: "16GB Corsair",
			hdd: "2TB",
		},
		price: "1,40,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 12900",
			gpu: "RTX 3090",
			ram: "16GB Corsair",
			hdd: "4TB",
		},
		price: "1,50,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 12700",
			gpu: "RTX 3080",
			ram: "16GB Corsair",
			hdd: "2TB",
		},
		price: "1,40,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 12700K",
			gpu: "RTX 4070",
			ram: "16GB Corsair",
			hdd: "2TB",
		},
		price: "1,60,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i7 12700",
			gpu: "RTX 4070Ti",
			ram: "16GB Corsair",
			hdd: "4TB",
		},
		price: "1,50,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 12900K",
			gpu: "RTX 4080",
			ram: "32GB Corsair",
			hdd: "8TB",
		},
		price: "1,60,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 12900K",
			gpu: "RTX 4080",
			ram: "32GB Corsair",
			hdd: "8TB",
		},
		price: "1,60,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 12900K",
			gpu: "RTX 4080",
			ram: "32GB Corsair",
			hdd: "8TB",
		},
		price: "1,60,000",
	},
	{
		id: window.crypto.randomUUID(),
		config: {
			cpu: "i9 12900K",
			gpu: "RTX 4080",
			ram: "32GB Corsair",
			hdd: "8TB",
		},
		price: "1,60,000",
	},
];

window.onload = () => {
	writeToLocalStorage();
};

function writeToLocalStorage() {
	localStorage.setItem("configData", JSON.stringify(data));
}
