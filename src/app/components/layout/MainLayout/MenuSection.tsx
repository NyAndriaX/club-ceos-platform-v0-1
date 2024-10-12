import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Button } from "primereact/button";

const SubMenList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SubMenuItem = styled.li`
  font-size: 1rem;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  text-decoration-line: none;
  transition: text-decoration-line 0.3s ease;
  &:hover {
    text-decoration-line: underline;
  }
`;

type MenuSectionProps = {
    section: string;
  };
  
export function MenuSection({ section }: MenuSectionProps) {
    const router = useRouter();

    switch (section) {
      case "last-masterclasses":
        return (
          <SubMenList>
            <SubMenuItem>Les dernières masterclasses</SubMenuItem>
            <SubMenuItem>Masterclasses à venir</SubMenuItem>
            <SubMenuItem>Demander à intervenir sur une masterclass</SubMenuItem>
          </SubMenList>
        );
      case "member-space":
      default:
        return (
          <SubMenList>
            <SubMenuItem>Les règles d&apos;adhésion</SubMenuItem>
            <SubMenuItem>Chartes éthique</SubMenuItem>
            <SubMenuItem>Tarifs et cotisations</SubMenuItem>
            <SubMenuItem>
              <Button
                icon="pi pi-lock"
                label="Accéder à l'espace membre"
                className="bg-fuchsia-500 border-nonde"
                onClick={() => router.push("/pages/auth")}
              />
            </SubMenuItem>
          </SubMenList>
        );
    }
  }
  