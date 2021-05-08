export const LOAD_CONVERSATION = "LOAD_CONVERSATION";
export const SAVE_CONVE = "SAVE_CONVE";

export const loadConversation = () => ({
  type: LOAD_CONVERSATION,
});

export const saveConv = (data) => ({
  type: SAVE_CONVE,
  data,
});
