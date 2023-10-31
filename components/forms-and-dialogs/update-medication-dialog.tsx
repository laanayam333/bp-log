"use client"

import { useState } from "react"
import { Edit2Icon } from "lucide-react"

import { Medication } from "@/lib/db/schema"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { UpdateMedicationForm } from "@/components/forms-and-dialogs/update-medication-form"

export const UpdateMedicationDialog = ({
  medication,
}: {
  medication: Medication
}) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button>
          <Edit2Icon className="tw-transition h-4 w-4 opacity-50 hover:opacity-100" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Medication</DialogTitle>
          <DialogDescription>
            <p>
              {`Do you want to delete `}
              <span className="font-semibold">{medication.name}</span>
              {` this medication? This action cannot be undone.`}
            </p>
          </DialogDescription>
        </DialogHeader>

        <UpdateMedicationForm setOpen={setOpen} medication={medication} />
      </DialogContent>
    </Dialog>
  )
}
