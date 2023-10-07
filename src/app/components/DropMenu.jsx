"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export default function DropMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { user, logout } = useContext(AuthContext)

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <div className="h-16 w-16 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/75" alt="Imagem do usuario" />
                </div>
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
                <Link href="/tarefa"><MenuItem onClick={handleClose}>Tarefas</MenuItem></Link>
                <MenuItem onClick={handleClose}>Conta</MenuItem>
                <MenuItem onClick={handleClose}>{user?.nome} : Editar Perfil</MenuItem>
                <MenuItem onClick={logout}>Sair</MenuItem>
            </Menu>
        </div>
    );
}