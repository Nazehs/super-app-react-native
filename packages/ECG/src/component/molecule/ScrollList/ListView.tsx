import { StyleSheet, Text, View, Image } from 'react-native'
import React, { ReactNode } from 'react';
import BoxAlign from '../../atom-del/BoxAlign';
import Box from '../../atom-del/Box';
import TextView from '../../atom-del/TextView';
import { colors } from '../../../utils/colors';
type listProps = {
    key?: string,
    value?: string,
}
type ListViewProps = {
    style?: {},
    data?: listProps
}

const ListView = (props: ListViewProps) => {
    const { style, data = [] } = props;
    const length = data?.length;
    return (
        <Box style={{ ...props.style, }}>
            {data.map((item, index) => {
                let stye = index != length - 1 ? styles.liststy : {};
                return (
                    <BoxAlign key={index} align={"space-between"} style={stye}>
                        <BoxAlign>
                            <TextView style={{ fontWeight: "600" }}>
                                {item.key}
                            </TextView>
                            <Margins type={"width"} />
                            {item.icon &&
                                <Image source={item.icon} style={styles.icon} />
                            }
                        </BoxAlign>
                        <TextView color={colors.greyLabel}>
                            {item.value}
                        </TextView>
                    </BoxAlign>
                )
            })}
        </Box>
    )
}

export default ListView

const styles = StyleSheet.create({
    liststy: {
        marginBottom: 10,
    },
    icon: {
        width: 20,
        height: 20
    }
})