import { defineStore } from 'pinia'
import type { Period } from '../models/Periods'
import type { PeriodPayload } from '../models/Periods';

import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

export const usePeriodsStore = defineStore('periods', {
  state: () => ({
    // arreglo de todos los periodos cargados desde el GET
    periods: [] as Period[],

    // periodo actualmente seleccionado (opcional)
    currentPeriod: null as Period | null,
  }),

  actions: {
    async fetchPeriods() {
      try {
        const response = await axios.get<Period[]>(`${apiUrl}/periods`)
        this.periods = response.data
      } catch (error) {
        console.error('Error al obtener periodos', error)
      }
    },

    async fetchPeriodById(id: number) {
      try {
        const response = await axios.get<Period>(`${apiUrl}/periods/${id}`)
        this.currentPeriod = response.data
      } catch (error) {
        console.error(`Error al obtener periodo con id ${id}`, error)
      }
    },

    async createPeriod(payload: PeriodPayload) {
      const response = await axios.post<Period>('/api/periods', payload)
      this.periods.push(response.data)
    },

    async editPeriod(id: number, payload: PeriodPayload) {
      const response = await axios.put<Period>(`/api/periods/${id}`, payload)
      const index = this.periods.findIndex(p => p.id === id)
      if (index !== -1) {
        this.periods[index] = response.data
      }
    },

    async deletePeriod(id: number) {
      await axios.delete(`/api/periods/${id}`)
      this.periods = this.periods.filter(p => p.id !== id)
    },
  }
})
