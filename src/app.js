const { createApp, ref, onBeforeMount } = Vue;

createApp({
	setup() {
		const summaryData = ref([
			{
				"category": "Reaction",
				"score": 80,
				"icon": "icon-reaction.svg",
				"color": "light_red"
			},
			{
				"category": "Memory",
				"score": 92,
				"icon": "icon-memory.svg",
				"color": "orangey_yellow"
			},
			{
				"category": "Verbal",
				"score": 61,
				"icon": "icon-verbal.svg",
				"color": "green_teal"
			},
			{
				"category": "Visual",
				"score": 72,
				"icon": "icon-visual.svg",
				"color": "cobalt_blue"
			}
		]);


		onBeforeMount(() => {
			summaryData.value = summaryData.value.map((data) => {
				data.textColor = `text-${data.color}`;
				data.bgColor = `bg-${data.color}`;
				return data;
			});
		});

		return {
			summaryData,
		};
	}
}).mount('#app');