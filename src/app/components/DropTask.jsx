"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { deleteTarefa } from '@/actions/tarefas';
import toast from 'react-hot-toast';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation';
const router = useRouter()


export default function DropTask({ tarefa }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = async () => {
        const response = await deleteTarefa(tarefa.id)
        if (response?.error) {
            toast(response.error)
        } else {
            toast.success("Tarefa apagada com sucesso!")
        }
        setAnchorEl(null);
    }

    const handleEdit = () => {
        router.push("/tarefa/1/edit")

    }
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <EllipsisVerticalIcon className="h-6 w-6 text text-dark-blue" />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleEdit}>Editar</MenuItem>

                <AlertDialog>
                    <AlertDialogTrigger>
                        <MenuItem>Excluir</MenuItem>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Tem certeza que deseja apagar essa conta?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Essa ação não pode ser desfeita.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDelete}>Sim, pode apagar essa Tarefa</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>



            </Menu>
        </div>
    );
}