'use client'

import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const drinksOptions = [
  "MOSCOW MULE – Vodka, xarope de gengibre, limão taiti e espuma de gengibre (Com personalização logomarca)",
  "BASIL SMASH – Gin, suco de limão siciliano, syrup de manjericão e folhas de manjericão",
  "PENICILIN – Whisky, suco de limão siciliano, xarope de gengibre e limão desidratado",
  "FITZGERALD – Gin, syrup de açúcar, suco de limão siciliano e angostura bitters",
  "CLASSIC TONIC – Gin, limão siciliano, zimbro e tônica",
  "BAR DE CAIPIRINHAS – VODKA, SAQUÊ E CACHAÇA",
  "ABACAXI COM HORTELÃ",
  "UVA COM MANJERICÃO",
  "KIWI COM LIMÃO",
  "SOFT DRINKS (NÃO ALCOOLICOS) - INCLUSO GULOSEIMAS – BALAS E DOCES",
  "CIRQUE BLUE – Curaçau blue, suco de blueberry, amora, mix de limão, água com gás e algodão doce ou bolha de fumaça",
  "PINK LEMONADE – Mix de limão, água com gás e syrup de romã servidos em lâmpadas brilhantes*",
  "PINA DESCOLADA - Suco de abacaxi, leite de coco, leite condensado e granulado colorido",
  "LICHIA PARADISE – Água com gás, xarope simples, lichia, suco de limão e hortelã",
  "SONHO BRILHANTE – Espumante sem álcool, algodão doce rosa mágico"
]

export function MultiSelectDrinks({ selected, onChange }: {
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const [open, setOpen] = useState(false)

  const toggleItem = (item: string) => {
    if (selected.includes(item)) {
      onChange(selected.filter(d => d !== item))
    } else {
      onChange([...selected, item])
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {selected.length > 0 ? `${selected.length} selecionada(s)` : 'Selecione bebidas'}
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] max-h-[300px] overflow-y-auto">
        <div className="flex flex-col gap-2">
          {drinksOptions.map((drink) => (
            <button
              type="button"
              key={drink}
              onClick={() => toggleItem(drink)}
              className={cn(
                'text-left text-sm px-2 py-1 rounded hover:bg-gray-100 flex justify-between items-center',
                selected.includes(drink) && 'bg-blue-100 font-medium'
              )}
            >
              <span>{drink}</span>
              {selected.includes(drink) && <Check className="w-4 h-4 text-blue-500" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
