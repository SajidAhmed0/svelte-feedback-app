<script>
	import FeedbackStats from './components/FeedbackStats.svelte'
	import FeedbackForm from './components/FeedbackForm.svelte';
	import FeedbackList from './components/FeedbackList.svelte'
	let feedback = [
		{
			id:1,
			rating: 10,
			text: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.'
		},
		{
			id:2,
			rating: 9,
			text: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.'
		},
		{
			id:3,
			rating: 8,
			text: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.'
		}
	]

	$: count = feedback.length;
	$: average = feedback.reduce((a, {rating})=> a + rating, 0) / feedback.length;

	const deleteFeedback = (e) => {
		const itemId = e.detail;
		feedback = feedback.filter((fb)=> fb.id != itemId);
	}

	const getNewFeedback = (e) => feedback = [e.detail, ...feedback];
</script>

<main class="container"> 
	<FeedbackForm on:new-feedback={getNewFeedback}/>
	<FeedbackStats {average} {count}/>
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
</main>
