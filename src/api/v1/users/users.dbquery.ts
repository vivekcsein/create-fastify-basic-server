

let localUserList: Iuser[] = [
    { id: 1, name: "Vivek", email: "vivek@example.com" },
    { id: 2, name: "Avyaan", email: "avyaan@example.com" },
];

export const getAllLocalUser = () => {
    if (localUserList.length) {
        return localUserList;
    }
    return "No User found"
}

export const getLocalUser = (id: number) => {
    const currentUser = localUserList.find((u) => u.id == id);
    return currentUser ? currentUser : "user not found"
}

export const createLocalUser = (user: Iuser) => {
    const { name, email } = user
    const prevUserEndID = localUserList.length
        ? Math.max(...localUserList.map(u => u.id))
        : 0;

    const newUser = { id: prevUserEndID + 1, name, email };
    localUserList.push(newUser);
    return { message: `new user is created with id: ${newUser.id}` }
}

export const deleteLocalUser = (id: number) => {

    const userIndex = localUserList.findIndex((u) => u.id == id);
    if (userIndex != -1) {
        localUserList.splice(userIndex, 1);
        return { message: `user with id :${id} deleted` }
    }
    return `no user found with id: ${id}`;
}

export const updateLocalUser = (user: Partial<Iuser>) => {
    const { id, name, email } = user;
    const userIndex = localUserList.findIndex((u) => u.id == id);

    if (userIndex !== -1) {
        localUserList[userIndex] = {
            ...localUserList[userIndex],
            ...(name && name?.length ? { name } : {}),
            ...(email && email?.length ? { email } : {})
        } as Iuser;

        return { message: "User updated", updatedUser: localUserList[userIndex] };
    }

    return { message: `User not found (ID: ${id})` };
};