import { atom } from 'recoil'

export const todoFilterAtom = atom({
key: 'todoFilterAtom',
default: 'all', // all | completed | pending
})