'use client'

import { api } from '../utils/trpc'

const ApiProvider = ({ children }: { children: React.ReactNode }) => {
	return <>{children}</>
}

export default api.withTRPC(ApiProvider)
