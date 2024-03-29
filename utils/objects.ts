// SPDX-FileCopyrightText: Copyright (c) 2022-2024 trobonox <hello@trobo.dev>
//
// SPDX-License-Identifier: Apache-2.0

export function findObjectById<Type> (objectArray: Array<Type>, objectId: string) {
    return objectArray.filter((object) => {
        // @ts-ignore
        return object.id == objectId;
    })[0];
}
