import tokenService from "./tokenService";

const BASE_URL = '/api/'

export function create(postID){
	return fetch(`${BASE_URL}posts/${postID}/votes`, {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res => {
		if(res.ok) return res.json()
	  new Error('Error voting Post');
	})
}

export function removeVote(likeID){
	return fetch(`${BASE_URL}votes/${likeID}`, {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res => {
		if(res.ok) return res.json()
	  new Error('Error voting Post');
	})
}