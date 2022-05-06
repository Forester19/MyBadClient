import {gql} from "@apollo/client";

export const CREATE_COMMON_PREFIX_REQUEST = gql`
    mutation setCommonPrefixString($input: CommonPrefixStringInput) {
        setCommonPrefixString(input: $input) {
            id, str
        }
    }
`;