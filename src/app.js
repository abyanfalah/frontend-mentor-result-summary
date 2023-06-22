const { createApp, ref, onMounted } = Vue;

createApp({
	setup() {
		const summaryData = ref([]);
		async function getData() {
			const full = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
			let response = await fetch(`${full}/data.json`);
			let data = await response.json();

			return data;
		}

		onMounted(async () => {
			summaryData.value = await getData();
			summaryData.value = summaryData.value.map((data) => {
				data.textColor = `text-${data.color}`;
				data.bgColor = `bg-${data.color}`;

				return data;
			});

			console.log(summaryData.value);
		});

		return {
			summaryData,
		};
	}
}).mount('#app');