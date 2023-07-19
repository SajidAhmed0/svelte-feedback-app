import {writable} from 'svelte/store';

export const FeedbackStore = writable(
    [
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
);