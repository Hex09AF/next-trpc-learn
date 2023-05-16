'use client'

import { api } from '../utils/trpc'

export default function IndexPage() {
	const hello = api.example.hello.useQuery({ text: 'client' })
	if (!hello.data) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<p>{hello.data.greeting}</p>
		</div>
	)
}
